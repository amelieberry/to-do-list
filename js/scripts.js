// Add new item to the list
function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something');
    } else {
        let list = $('#list');
        list.append(li);
    }

    // Cross out an item from the list
    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    // Add the delete button
    let  crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
}
