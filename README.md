# Task Manager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

Task Manager is a content board for tasks. It will help you organize your daily tasks.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Usage

You can create lists and tasks by clicking the tick icon and also by hitting the "Enter" key. In order to create a new task for the current list unfold the "New Task Element"
```
enterSubmit(event: KeyboardEvent): void /*new list on hitting "Enter" key in the input*/

addNewList(event: KeyboardEvent) 

addNewTask(event: KeyboardEvent) : void /*you can also add new tasks and lists by clicking de OK icon*/

```

It's also possible to edit and delete lists and tasks by clicking the "Delete" and "Edit(pencil)" icons. Note that you have to confirm via dialog that you confirm the deletion action
```
openDialog(index: number):void /*will open the confirmation dialog*/

deleteList(index: number) /*will delete current task and list*/

deleteTask(index: number) /*will delete current task and task*/

```

When a task is completed you can click the "Complete Task" icon in order to mark it as completed
```
toggleCompleteTask(task: Task): void /*will toggle complete mark*/

```


## Contributing
Please feel free to contribute and add new features and ideas to this app.

## Author
[FedeCopperi](https://github.com/FredKF) for [GeeksHubs Academy](https://bootcamp.geekshubsacademy.com/?utm_source=search&utm_medium=googleads&utm_campaign=Brand)

## License
[MIT](https://choosealicense.com/licenses/mit/)
