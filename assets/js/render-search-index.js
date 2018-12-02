











var urls = ['../../malthus/text/index.html','../../malthus/text/0-1-titlepage.html','../../malthus/text/0-2-copyright.html','../../malthus/text/0-4-de-auctore.html','../../malthus/text/0-3-contents.html','../../malthus/text/xx03.html','../../malthus/text/xx04.html','../../malthus/text/xx05.html','../../malthus/text/xx06.html','../../malthus/text/xx07.html','../../malthus/text/xx08.html','../../malthus/text/xx09.html','../../malthus/text/xx10.html','../../malthus/text/xx11.html','../../malthus/text/xx12.html','../../malthus/text/xx13.html','../../malthus/text/xx14.html','../../malthus/text/xx15.html','../../malthus/text/xx16.html','../../malthus/text/xx17.html','../../malthus/text/xx18.html','../../malthus/text/xx19.html','../../malthus/text/xx20.html','../../malthus/text/xx21.html','../../malthus/text/xx22.html','../../malthus/text/xx23.html','../../malthus/text/xx24.html']



var fs = require('fs');
var page = require('webpage').create();
var index = "";
var count = 0;

function getPageData(url, count, callback) {
    'use strict';
    page.open(url, function () {

        // Get the title and scrub it
        var title = page.evaluate(function () {
            return document.title.replace(/\"/g, '\'\'').replace(/\s+/g, ' ').trim();
        });

        // Get the content and scrub it
        var content = page.evaluate(function () {
            return document.body.querySelector('#content').textContent.replace(/\"/g, '\'\'').replace(/\s+/g, ' ').trim();
        });

        // We want this for each page:
        // index.addDoc({
        //   id: n,
        //   title: "Title of page",
        //   content: "Content of page",
        // });
        var entry = 'index.addDoc({\n    id: ' + count + ',\n    title: "' + title + '",\n    content: "' + content + '"\n});\n';

        // Add entry to the index array
        index += entry;

        callback();

        return true;

    });

}

function process() {
    'use strict';
    if (urls.length > 0) {

        console.log('Indexing ' + urls[0]);

        // Grab the first URL, then
        // drop it from the array
        var url = urls[0];
        urls.splice(0, 1);

        // do getPageData
        getPageData(url, count, process);

        // increment the counter for id
        count = count + 1;

    } else {
        console.log('Writing search-index.js...');
        fs.write('../../../assets/js/search-index.js', index, 'w');
        console.log('Done.');
        page.close();
        phantom.exit();
    }
}

console.log('Starting...');
process();
