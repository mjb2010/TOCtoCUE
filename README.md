TOCtoCUE
========

This JavaScript function takes a CD TOC string, in the format used on the MusicBrainz web site, and converts it to a text fragment that can be used in a cue sheet for an image rip (all tracks in one file), when the original .cue is not available.

If the second argument to the function is true, the fragment will be suitable for use with an image that includes Hidden Track One Audio (HTOA, i.e. track 01 index 00). By default, the function assumes that HTOA is not in the file.

Changes:

  2013-11-02: [mjb2010] First version.
