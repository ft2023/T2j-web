# T2J-BENCH project website

Static research project page adapted from the ScientistTwo website. Serve the repository root with any static HTTP server. All asset paths support the `/T2j-web/` GitHub Pages subpath.

## Content provenance

Page content and figures were adapted from the T2J-BENCH manuscript at source revision `10a95391af81a5b3d4d193f7e34f1c877e2ba303`. Authors and equal contribution were supplied by the authors. Results combine the main leaderboard and additional baselines appendix (20 off-the-shelf configurations, TwinHarness, and the oracle). Values are three-seed means. Public PDF and OpenReview links use submission `OBfAylixqT`.

Affiliations were researched from author homepages and institution profiles; see static/data/affiliations.json for sources and the distinction from manuscript-specific affiliations. The manuscript says the benchmark will be released; the page does not present the manuscript repository as a benchmark code release. Update this when a public benchmark URL is available. Citation uses a 2026 manuscript entry, without claiming conference acceptance.

## Files

- `index.html`: content and server-rendered result table, usable without JavaScript
- `static/css/index.css`: responsive styles
- `static/js/index.js`: harness filter, section navigation, and citation copying
- `static/data/results.json`: structured transcription of manuscript result tables
- `static/images/` and `static/figures/`: rendered and original manuscript figures

Original template licensing is preserved in LICENSE. No API tokens or manuscript working files are included.
