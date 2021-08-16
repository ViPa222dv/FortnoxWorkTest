README
I managed to make frontend functions to work according to the instructions, I did not have time to do styling since I have to start finalizing my thesis which is due soon.
The backend works separetly so if you use postman and call for the GET and POST requests it should work. Currently the POST call does not work as it should I don't know the exact issue. The GET works as it should I have not been able to load the data from the GET call yet, but the json can be seen in the console so the GET request works.

So to run the program you need to first start the server in the boxinator folder, then locate BoxinatorApplication and run it.
If you want to specify for your own database, user and password you can change the settings in application.properties in the resource folder.

After that go to the javascript/boxinator-frontend folder and write npm start. then you should be able to use form, but can't send the data currently.
You can see how the list is intended to look with the help of the file test-data.json, but it is not the current data from the database.

I did not have time to do a unit or component test since I was not entirely sure how to do it since it would be my first time testing a full stack project.

Youtube link to see what my application can do: https://www.youtube.com/watch?v=pnN9ZNBJIyA

