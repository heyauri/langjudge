# langjudge

## Introduction
A nodejs module that is used to judge what type of language was input.

## Usage
You won't need to install any dependencies at all.

The module just use the Unicode to match the input's pattern automatically.

### apis:
### `langjudge.langAllContain(str)`

It will list all the language types that your input may belong to.

for example:

`langjudge.langAllContain("あ")`

It will return a result "['japanese']"

`langjudge.langAllContain("م")`

It will return a result "['Arabic']"

## warning:

For I can't hardly tell the difference between French/German/Spanish/Italian,etc. when the input consist of such language ,the module would just return "['Latin']".

Those which based on Cyrillic are just the same,such as Bulgarian, Belarusian, Macedonian, Russian, Serbian and Ukrainian.

Besides,bacause Janpanese contain some Chinese charecters,they may be returned togeter. 
