# project-management-system

## Prerequisites

* Visual Studio 2022
* .NET 6 SDK
* Nodejs 14+ version
* Angular CLI version 11+ 

## Running the Application

To run the application, open the .sln file in Visual Studio 2022. Hit Ctrl + F5. The Angular app and the backend server should be automatically deployed.


## Troubleshooting 

If the client app starts before the server starts, refresh the app after the server has summoned. 

If Visual Studio throws TypeScript errors, go to the PMS (client project) navigate to the folder with the `package.json file`, open a command prompt of your choice and execute "npm install".

If Visual Studio does not run the application, right click on the Solution and select the `Set Startup Project...` option. Select `Start` for both of the projects. Alternatively, open the PMS project and navigate to the folder that contains the package.json file. Execute the `ng serve` command in a command prompt of your choice.

