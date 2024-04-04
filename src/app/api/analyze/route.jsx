import { NextRequest, NextResponse } from "next/server"; // To handle the request and response
import { promises as fs } from "fs"; // To save the file temporarily
import { v4 as uuidv4 } from "uuid"; // To generate a unique filename
import PDFParser from "pdf2json"; // To parse the pdf

export async function POST(req) {
  const formData = await req.formData();
  const uploadedFile = formData.get("file");
  let fileName = "";
  let parsedText = "";

  if (!uploadedFile) {
    return new NextResponse("No file uploaded", { status: 400 });
  }

  // Check if uploadedFile is of type File
  if (uploadedFile instanceof File) {
    // Generate a unique filename
    fileName = uuidv4();

    // Convert the uploaded file into a temporary file
    const tempFilePath = `/tmp/${fileName}.pdf`;

    // Convert ArrayBuffer to Buffer
    const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());

    // Save the buffer as a file
    await fs.writeFile(tempFilePath, fileBuffer);

    // Parse the pdf using pdf2json
    const pdfParser = new PDFParser(null, 1);

    // Create a promise to wait for the parsing to complete
    const parsingCompleted = new Promise((resolve, reject) => {
      pdfParser.on("pdfParser_dataError", (errData) => {
        console.log(errData.parserError);
        reject(errData.parserError);
      });

      pdfParser.on("pdfParser_dataReady", () => {
        parsedText = pdfParser.getRawTextContent();
        resolve();
      });
    });

    // Load and parse the PDF file
    pdfParser.loadPDF(tempFilePath);

    // Wait for the parsing to complete before returning the response
    await parsingCompleted;
  } else {
    console.log("Uploaded file is not in the expected format.");
  }

  const response = new NextResponse(parsedText);
  response.headers.set("FileName", fileName);
  return response;
}
