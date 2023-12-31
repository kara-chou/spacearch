# UI development for space architecture
Access here: https://claireluchen.github.io <br>
This research explores behavioral risks associated with extreme environments, particularly in spaceflights, with the goal of enhancing space architecture designs. We also seek to visually depict the intricate connection between human emotions, psychology, and their surroundings. This interactive website serves as a user-friendly interface to help the public visualize spaceflight challenges and their intricate relationships. It explores behavioral risks with respect to different factors, such as lighting and crew selection. <br>
The homepage is an overview of factors associated with spaceflight: mission parameters, mediator variables, processes, outcomes, and mission success. <br>
Each subsequent layer provides insights into increasingly specific factors. User can hover over each box to learn more about each factor and their connections to others. <br>

## Contributing
The project is written in HTML, CSS, and Javascript. <br>
The home page is associated with 3 files: index.html, style1.css, zoomLayer1.js. <br>
The 2nd layer is associated with 3 files: layer2.html, style2.css, zoomLayer2.js. <br>
The 3rd layer is associated with 3 files: layer3.html, style3.css, zoomLayer3.js. <br>
To change the shape, color, etc. of the boxes, edit the corresponding css file. Each individual box is written as a class where you can make changes unique to the box (e.g. color, text). <br>
To change the content displayed upon hover/click, edit the corresponding javascript file. The explanation for each box is stored inside boxContents and can be edited individually. <br>

The graphs file stores the layer 3 graph in adjacency lists. The generatePath file generates all elements the current element is directly connected to.
