const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");
const notifier = require("node-notifier");

const filePath = `./amerveer_bhatti.txt`;
const outputPath = path.join(__dirname, `${filePath}`);

const command = `npx pkg ${filePath} --targets node16-win-x64 --output ${outputPath}`;

fs.writeFileSync(filePath, "cries in panjab");

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error creating executable: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log("Executable created successfully!");
  console.log(`The executable is available at: ${outputPath}`);

  notifier.notify({
    title:"shut up",
    message:"ok",
    sound:true,
    
  })
});
