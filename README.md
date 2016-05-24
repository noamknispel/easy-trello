# Easy-Trello
Easy way to add cards to your Trello list via CLI.

### Installing
You can easyly install using npm:
* `npm install -g easy-trello`
* Create configuration file in `~/.trellorc` (or another [RC's convention](https://github.com/dominictarr/rc ("RC documentation"))):
```
{
  "appKey": "",
  "token": "",
  "listId": ""
}
```

### Using
After installing you can use **easy-trello**:
```
easy-trello "TITLE" "DESCRIPTION"
```

You can also use **bulk mode**:
```
easy-trello PATH_TO_TEXT_FILE
```
###### Text file format
```
TITLE | DESCRIPTION
ANOTHER TITLE | DESCRIPTION
```
