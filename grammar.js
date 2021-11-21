module.exports = grammar({
  name: "sixtyfps",

  rules: {
    source_file: ($) => repeat($._statement),

    _statement: ($) =>
      choice(
        $._simple_statements,
        //$._compound_statement
      ),

    _simple_statements: ($) =>
      choice(
        $.import_statement,
      ),

    import_statement: ($) =>
      seq(
        "import",
        $.imports_list,
        "from",
        field("path", $.string),
        ";",
      ),

    imports_list: ($) =>
      seq(
        "{",
        $.identifier,
        "}",
      ),

    identifier: ($) => /[A-Za-z]+/,

    string: ($) =>
      seq(
        '"',
        '"',
      ),
  },
});
