// Dependencies
import { expect } from "chai";

// Utils
import removeMarkdown from "../";

describe("Remove Markdown", () => {
  describe("Remove", () => {
    it("shoud leave a string alone without markdown", () => {
      const string = "Javascript Developers are the best.";

      expect(removeMarkdown(string)).to.equal(string);
    });

    it("should strip out remaining markdown", () => {
      const string = "*Javascript* developers are the _best_.";
      const expected = "Javascript developers are the best.";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should leave non-matching markdown markdown", () => {
      const string = "*Javascript* developers* are the _best_.";
      const expected = "Javascript developers* are the best.";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should leave non-matching markdown, but strip empty anchors", () => {
      const string = "*Javascript* [developers]()* are the _best_.";
      const expected = "Javascript developers* are the best.";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should strip HTML", () => {
      const string = "<p>Hello World</p>";
      const expected = "Hello World";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should strip anchors", () => {
      const string =
        "*Javascript* [developers](https://engineering.condenast.io/) are the _best_.";
      const expected = "Javascript developers are the best.";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should strip img tags", () => {
      const string =
        "![](https://placebear.com/640/480)*Javascript* developers are the _best_.";
      const expected = "Javascript developers are the best.";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should use the alt-text of an image, if it is provided", () => {
      const string =
        "![This is the alt-text](https://www.example.com/images/logo.png)";
      const expected = "This is the alt-text";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should strip code tags", () => {
      const string = "In `Getting Started` we set up `something` foo.";
      const expected = "In Getting Started we set up something foo.";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should leave hashtags in headings", () => {
      const string = "## This #heading contains #hashtags";
      const expected = "This #heading contains #hashtags";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should remove emphasis", () => {
      const string = "I italicized an *I* and it _made_ me *sad*.";
      const expected = "I italicized an I and it made me sad.";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should remove double emphasis", () => {
      const string = "**this sentence has __double styling__**";
      const expected = "this sentence has double styling";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should remove horizontal rules", () => {
      const string = "Some text on a line\n\n---\n\nA line below";
      const expected = "Some text on a line\n\nA line below";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should remove horizontal rules with space-separated asterisks", () => {
      const string = "Some text on a line\n\n* * *\n\nA line below";
      const expected = "Some text on a line\n\nA line below";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should remove blockquotes", () => {
      const string = ">I am a blockquote";
      const expected = "I am a blockquote";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should remove blockquotes with spaces", () => {
      const string = "> I am a blockquote";
      const expected = "I am a blockquote";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should remove indented blockquotes", () => {
      const tests = [
        { string: " > I am a blockquote", expected: "I am a blockquote" },
        { string: "  > I am a blockquote", expected: "I am a blockquote" },
        { string: "   > I am a blockquote", expected: "I am a blockquote" },
      ];

      tests.forEach(function (test) {
        expect(removeMarkdown(test.string)).to.equal(test.expected);
      });
    });

    it("should remove blockquotes following other content", () => {
      const string =
        "## A headline\n\nA paragraph of text\n\n> I am a blockquote";
      const expected = "A headline\n\nA paragraph of text\n\nI am a blockquote";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should not remove greater than signs", () => {
      const tests = [
        { string: "100 > 0", expected: "100 > 0" },
        { string: "100 >= 0", expected: "100 >= 0" },
        { string: "100>0", expected: "100>0" },
        { string: "> 100 > 0", expected: "100 > 0" },
        { string: "1 < 100", expected: "1 < 100" },
        { string: "1 <= 100", expected: "1 <= 100" },
      ];

      tests.forEach(function (test) {
        expect(removeMarkdown(test.string)).to.equal(test.expected);
      });
    });

    it("should strip unordered list leaders", () => {
      const string =
        "Some text on a line\n\n* A list Item\n* Another list item";
      const expected = "Some text on a line\n\nA list Item\nAnother list item";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should strip ordered list leaders", () => {
      const string =
        "Some text on a line\n\n9. A list Item\n10. Another list item";
      const expected = "Some text on a line\n\nA list Item\nAnother list item";

      expect(removeMarkdown(string)).to.equal(expected);
    });

    it("should handle paragraphs with markdown", () => {
      const paragraph =
        "\n## This is a heading ##\n\nThis is a paragraph with [a link](http://www.disney.com/).\n\n### This is another heading\n\nIn `Getting Started` we set up `something` foo.\n\n  * Some list\n  * With items\n    * Even indented";
      const expected =
        "\nThis is a heading\n\nThis is a paragraph with a link.\n\nThis is another heading\n\nIn Getting Started we set up something foo.\n\n  Some list\n  With items\n    Even indented";

      expect(removeMarkdown(paragraph)).to.equal(expected);
    });
  });
});
