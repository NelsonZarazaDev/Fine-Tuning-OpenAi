const fileService = require("../services/file/fileService");
const openaiService = require("../services/file/openAIService");


async function Test(req, res) {
  res.send("Test ok");
}

async function TransformData(req, res) {
  await fileService.TransformData();
  res.send();
}

//#region File
async function UploadFile(req, res) {
  const response = await fileService.UploadFile();
  res.status(response.status).send(response.data);
}

async function ListFiles(req, res) {
  const response = await fileService.ListFiles();
  res.status(response.status).send(response.data);
}

async function RetrieveFile(req, res) {
  var fileId = req.query["fileId"];
  const response = await fileService.RetrieveFile(fileId);
  if (!response || response == "fileId nor found") {
    res.status(400).send(response);
  } else {
    res.status(response.status).send(response.data);
  }
}
//#endregion

async function GetMessage (req, res){
  var message = req.query["message"];
  const response = await openaiService.GetMessage(message);
  res.send(response);
}

module.exports = {
  Test,
  TransformData,
  UploadFile,
  ListFiles,
  RetrieveFile,
  GetMessage
}
