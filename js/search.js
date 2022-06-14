// ======= Search about District Name ============= //
$(document).ready(function () {
    $("#search-district").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-district");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[6];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// ======= Search about District Name ============= //
$(document).ready(function () {
    $("#search-unit-name").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-unit-name");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[6];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTableSort");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}





let options = $("#unitList").html();
$("#districtList").change(function (e) {
    let text = $("#districtList :selected").text();
    $("#unitList").html(options);
    if (text == "All") return;
    $('#unitList :not([value^="' + text.substr(0, 3) + '"])').remove();

});

let specialities = $("#specialityList").html();
$("#CertificationList").change(function (e) {
    let text = $("#CertificationList :selected").text();
    $("#specialityList").html(specialities);
    if (text == "All") return;
    $('#specialityList :not([value^="' + text.substr(0, 3) + '"])').remove();

});

let medSupIn = $("#supItemLabel").html();
$("#supItemGroup").change(function (e) {
    let text = $("#supItemGroup :selected").text();
    $("#supItemLabel").html(medSupIn);
    if (text == "All") return;
    $('#supItemLabel :not([value^="' + text.substr(0, 3) + '"])').remove();

});

/////// show search By Category Fields ////////

let searchByCategory = document.getElementById("searchByCategory");
let searchByCatBtn = document.getElementById("searchByCatBtn");

function searchByCat() {
    if (searchByCategory.className === "searchByFlex") {
        searchByCategory.className += " open";
        searchByCatBtn.className += ' btn-grey';
        searchByCatBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Search by Categories';
    }
    else {
        searchByCategory.className = "searchByFlex";
        searchByCatBtn.className += 'btn btn-padha';
        searchByCatBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> Search by Categories';
    }
}



