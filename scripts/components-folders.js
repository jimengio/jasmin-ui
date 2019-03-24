var fs = require("fs");
var path = require("path");
var filePath = path.resolve("./src/components");

fileDisplay(filePath);

function fileDisplay(filePath) {
  fs.readdir(filePath, async function(err, files) {
    if (err) {
      console.warn(err);
    } else {
      const filePromises = files.map(function(filename) {
        var filedir = path.join(filePath, filename);

        return new Promise(function(res, rej) {
          fs.stat(filedir, function(eror, stats) {
            if (eror) {
              console.warn("获取文件stats失败");
            } else {
              var isDir = stats.isDirectory();
              if (isDir) {
                // folderNames.push(filename);
                console.log("folder: ", filename);
              }
            }
            res(filename);
          });
        });
      });

      const names = await Promise.all(filePromises);

      fs.writeFileSync(
        path.resolve("./scripts/folder-names.json"),
        JSON.stringify({
          folders: names,
        })
      );
    }
  });
}
