# Introduction

## What is data ?

It is the measure of the state of a system at a certain time.

### Usual formats

- Binaries
- Text:
  - [RTF](https://en.wikipedia.org/wiki/Rich_Text_Format)
  - [Markdown](https://en.wikipedia.org/wiki/Markdown)
  - ...
- [JSON](https://en.wikipedia.org/wiki/JSON)
  - [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON)
  - [BSON](https://en.wikipedia.org/wiki/BSON)
  - [JSON5](https://json5.org/)
  - [NDJSON](http://ndjson.org/)
  - ...
- [YAML](https://en.wikipedia.org/wiki/YAML)
- [CSV](https://en.wikipedia.org/wiki/Comma-separated_values)
- [XML](https://en.wikipedia.org/wiki/XML)
  - [RSS](https://en.wikipedia.org/wiki/RSS)
  - [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)

#### JSON Example

```json
{
  "menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        { "value": "New", "onclick": "CreateNewDoc()" },
        { "value": "Open", "onclick": "OpenDoc()" },
        { "value": "Close", "onclick": "CloseDoc()" }
      ]
    }
  }
}
```

#### XML Example

```xml
<menu id="file" value="File">
   <popup>
     <menuitem value="New" onclick="CreateNewDoc()"/>
     <menuitem value="Open" onclick="OpenDoc()"/>
     <menuitem value="Close" onclick="CloseDoc()"/>
   </popup>
 </menu>
```

#### YAML Example

```yaml
menu:
  id: file
  value: File
  popup:
    menuitem:
      - value: New
        onclick: CreateNewDoc()
      - value: Open
        onclick: OpenDoc()
      - value: Close
        onclick: CloseDoc()
```

#### CSV Example

```csv
Sexe,Prénom,Année de naissance
M,Alphonse,1932
F,Béatrice,1964
F,Charlotte,1988
```

## 4 steps of data

### #1 Find

#### Private apis

- [Spotify](https://developer.spotify.com/documentation/web-api/)
- [Twitter](https://developer.twitter.com/)

#### [Scraping](https://en.wikipedia.org/wiki/Web_scraping)

Browse a website programatically to extract its data.

https://simplescraper.io/

#### Auto produced

An interesting example: [Dear Data](https://www.dear-data.com/theproject)

#### [Open data](https://en.wikipedia.org/wiki/Open_data)

- [Open data France](https://www.data.gouv.fr/fr/datasets/)
- [Open data Paris](https://opendata.paris.fr/explore/?disjunctive.theme&disjunctive.publisher&disjunctive.keyword&disjunctive.modified&disjunctive.features&sort=modified)
- [Open data Bordeaux](https://scnbdx.opendatasoft.com/explore/?disjunctive.publisher&disjunctive.frequence&disjunctive.territoire&sort=title)
- [Open data NYC](https://opendata.cityofnewyork.us/data/)

### #2 Clean

[Some feedbacks on how to produce clean data](https://medium.com/we-are-ants-le-blog/faire-de-l-open-data-efficace-5b5746ec90f4) / [[fr]](https://medium.com/ants-blog/building-useful-open-data-c4e9b3e69034)

The need of cleaning is generally greater with open data.

### #3 Analyze

[Data-science](https://en.wikipedia.org/wiki/Data_science)

- Regressions
- Decision trees
- Neural networks
- ...

### [#4 Display](./exercises.md)
