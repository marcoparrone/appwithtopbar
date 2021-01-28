# appwithtopbar

App container element with a material TopAppBar react component.

## Installation

```sh
npm install @marcoparrone/appwithtopbar
```

## Usage

```js
import AppWithTopBar from '@marcoparrone/appwithtopbar';
```

Read further for more information.

## Creating a container element with material TopAppBar

For creating a container element with a materia Top App Bar, you can use the AppWithTopBar component.  It accepts these properties:

 * id: and identifier for the element, its default value is zero;
 * refprop: a reference created with React.createRef(); it will be an anchor for finding all the contained elements
 * lang: the language code (for example: 'en')
 * appname: the name of the app (for example: 'Notes')
 * icons: an array of objects, every object must cotain the label property which is a string describing the icon, an icon property containing the id of some material icon (see https://material.io/resources/icons/ for more details), and a callback property containing a function which will be activated when the user will click on the icon.

 Here is an example:


```js
			<AppWithTopBar refprop={this.notesListRef} lang={this.state.language} appname={this.state.text_appname}
			  icons={[{label: this.state.text_add_label, icon: 'add', callback: () => this.addNote()},
								{label: this.state.text_settings_label, icon: 'settings', callback: () => open_dialog(this.notesListRef, 'settings')},
								{label: this.state.text_importexport_label, icon: 'import_export', callback: () => open_dialog(this.notesListRef, 'impexp')},
								{label: this.state.text_help_label, icon: 'help', callback: () => open_dialog(this.notesListRef, 'help')},
                {label: this.state.text_about_label, icon: 'info', callback: () =>  open_dialog(this.notesListRef, 'about')}]} >
...
... other content of the app ...
...
        </AppWithTopBar>
```

It is important to include the material icons in the HTML page. I usually include them directly in the static HTML page:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
...
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
...
  </head>
  <body>
...
  </body>
</html>
```