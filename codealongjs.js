function noteTaking() {
    const noteArray = ['Throw trash']
    let option = prompt("Select Input:")
    while (option !== "Quit") {
        option = prompt("Select Input:");
        if (option === "Add") {
            const newNote = prompt('Add a new note:');
            noteArray.push(newNote)
        }
        else if (option === "Delete") {
            const indexStr = prompt("What is the note's number?");
            const indexInt = parseInt(indexStr);
            noteArray.splice((indexInt - 1), 1);
            console.log(`Note ${indexStr} has been deleted.`)
        }
        else if (option === "List") {
            console.log("Listing notes");
            for (let i = 0; i < noteArray.length; i++) {
                console.log(`${i + 1}: ${noteArray[i]}`)
            }

        }
        else {
            console.log("Not a valid Input!")
        }
    }
}
noteTaking()