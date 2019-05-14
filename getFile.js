const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');


const readDirSync = (folderPath) => {
    return new Promise((resolve, reject) => {
        let result = [];
        const readTopDirSync = ((folderPath) => {
            let items = fs.readdirSync(folderPath);
            items = items.map((itemName) => {
                return path.join(folderPath, itemName);
            });
            items.forEach((itemPath) => {
                if (path.extname(itemPath) === '.html') {

                    try {
                        const html = fs.readFileSync(itemPath, 'utf-8');
                        const $ = cheerio.load(html, {
                            decodeEntities: false
                        });

                        let titles = $('title').text().split('|');
                        let title = titles[0].trim();
                        let type = titles[1] ? titles[1].trim() : 'Pages';

                        if (
                            itemPath.indexOf('page-list.html') < 0 &&
                            itemPath.indexOf('partials') < 0 &&
                            itemPath.indexOf('ajax') < 0
                        ) {
                            result.push({
                                title: title,
                                type: type,
                                path: itemPath.replace('enhance', '')
                            });
                        }

                    } catch (e) {
                        console.error(e)
                    }
                }

                if (fs.statSync(itemPath).isDirectory()) {
                    readTopDirSync(itemPath);
                }
            });
        });
        readTopDirSync(folderPath);
        resolve(result);
    });
};

readDirSync('./src')
    .then((response) => {
        let json = JSON.stringify(response);
        fs.writeFile('./dist/pages.json', json, () => {});
    });