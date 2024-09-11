const { log } = require("console");
const fs = require("fs");

const addFile = (data) => {
  const allData = loadData();

  const duplicate = allData.find((ele) => {
    return ele.name === data.name;
  });

  if (duplicate) {
    console.log("User already exist!");

    return;
  }

  allData.push(data);

  const newData = JSON.stringify(allData);
  fs.writeFile("data.json", newData, (err) => {
    if (err) console.log(err);
    console.log("File created successfully!");
  });
};

const viewFile = () => {
  const allData = loadData();
  console.log(allData);
};

const deleteData = (name) => {
  let allData = loadData();

  allData = allData.filter((ele) => {
    return ele.name != name;
  });

  const newData = JSON.stringify(allData);
  fs.writeFile("data.json", newData, (err) => {
    if (err) console.log(err);
    console.log("Data deleted Successfully!");
  });
};

const loadData = () => {
  try {
    const data = fs.readFileSync("data.json", "utf-8");
    newData = JSON.parse(data);
    return newData;
  } catch (error) {
    return [];
  }
};

module.exports = { addFile, viewFile, deleteData };
