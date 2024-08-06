function searchTable() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const table = document.getElementById('dataTable');
    const rows = Array.from(table.getElementsByTagName('tr')).slice(1); // Exclude the header row

    // If input is empty, display all rows
    if (input === '') {
        rows.forEach(row => row.style.display = '');
        return;
    }

    // Filter rows based on the input
    const filteredRows = rows.filter(row => {
        const cells = row.getElementsByTagName('td');
        return Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(input));
    });

    // Sort rows by the closest match (simplified to sort by number of matched cells)
    filteredRows.sort((a, b) => {
        const aMatchCount = Array.from(a.getElementsByTagName('td')).filter(cell => cell.textContent.toLowerCase().includes(input)).length;
        const bMatchCount = Array.from(b.getElementsByTagName('td')).filter(cell => cell.textContent.toLowerCase().includes(input)).length;
        return bMatchCount - aMatchCount;
    });

    // Hide all rows initially
    rows.forEach(row => row.style.display = 'none');

    // Display the closest three matches
    filteredRows.slice(0, 3).forEach(row => row.style.display = '');

    // Display the rest of the rows after the closest three
    filteredRows.slice(3).forEach(row => row.style.display = '');
}

$(document).ready(function () {
    console.log("JQuery loaded");

    // Event listener for event buttons
    $(".event-button").click(function () {

        var event = $(this).text();
        console.log(event)
        console.log(typeof(event))
        switch (event) {
            case "FX":
                $("#floor").show();
                $("#pommel").hide();
                $("#Mushroom").hide();
                $("#rings").hide();
                $("#vault").hide();
                $("#pbars").hide();
                $("#highbar").hide();
                break;
            case "PH":
                $("#floor").hide();
                $("#pommel").show();
                $("#Mushroom").hide();
                $("#rings").hide();
                $("#vault").hide();
                $("#pbars").hide();
                $("#highbar").hide();
                break;
            case "Mushroom":
                $("#floor").hide();
                $("#pommel").hide();
                $("#Mushroom").show();
                $("#rings").hide();
                $("#vault").hide();
                $("#pbars").hide();
                $("#highbar").hide();
                break;
            case "SR":
                $("#floor").hide();
                $("#pommel").hide();
                $("#Mushroom").hide();
                $("#rings").show();
                $("#vault").hide();
                $("#pbars").hide();
                $("#highbar").hide();
                break;
            case "VT":
                $("#floor").hide();
                $("#pommel").hide();
                $("#Mushroom").hide();
                $("#rings").hide();
                $("#vault").show();
                $("#pbars").hide();
                $("#highbar").hide();
                break;
            case "PB":
                $("#floor").hide();
                $("#pommel").hide();
                $("#Mushroom").hide();
                $("#rings").hide();
                $("#vault").hide();
                $("#pbars").show();
                $("#highbar").hide();
                break;
            case "HB":
                $("#floor").hide();
                $("#pommel").hide();
                $("#Mushroom").hide();
                $("#rings").hide();
                $("#vault").hide();
                $("#pbars").hide();
                $("#highbar").show();
                break;
            default:
                break;
        }
    });

    $('#nga-checkbox').change(function() {
        if ($(this).is(':checked')) {
            $('.super-skill-class').show();
        } else {
            $('.super-skill-class').hide();
        }
    });
    $('#usag-checkbox').change(function() {

        
        if ($(this).is(':checked')) {
            $('.usag').show();
            document.querySelector('.usag').scrollIntoView({
                behavior: 'instant'
            });
        } else {
            $('.usag').hide();
        }
    });
});



