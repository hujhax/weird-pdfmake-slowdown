To run this, run bower install to add the pdfMake component, run index.html, and try pressing each button.

The "fast" one should take about 3 seconds to make a PDF, while the "slow" one (with less than twice as much text) should take a couple of minutes.

Check in the console for some very rudimentary instrumenting -- here are my results, running Chrome on a PC desktop:

    app.js:25 fast-doc: 3175.000ms
    app.js:25 slow-doc: 109623.000ms