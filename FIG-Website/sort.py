from bs4 import BeautifulSoup

def sort_table_by_difficulty(html_file, output_file):
    # Read the HTML file
    with open(html_file, 'r') as file:
        soup = BeautifulSoup(file, 'html.parser')

    # Find all tables
    tables = soup.find_all('table', class_='skill-table')

    # Loop through each table and sort rows by difficulty
    for table in tables:
        rows = table.find_all('tr', class_='skill-entry')
        rows_sorted = sorted(rows, key=lambda row: float(row.find_all('td')[1].text))

        # Remove old rows
        for row in rows:
            row.extract()

        # Append sorted rows
        for row in rows_sorted:
            table.append(row)

    # Write the sorted HTML to a new file
    with open(output_file, 'w') as file:
        file.write(str(soup))

def add_class_to_skill_entries_with_zero_difficulty(input_file, output_file):
    # Read the HTML file
    with open(input_file, 'r') as file:
        soup = BeautifulSoup(file, 'html.parser')

    # Find all table rows
    rows = soup.find_all('tr', class_='skill-entry')

    # Loop through each row and check the value of the second td
    for row in rows:
        tds = row.find_all('td')
        if len(tds) > 1 and tds[1].text.strip() == '0.0':
            # Add the class 'super-skill-class' to the row
            row['class'] = row.get('class', []) + ['super-skill-class']

    # Write the modified HTML to a new file
    with open(output_file, 'w') as file:
        file.write(str(soup))

# Define input and output file paths
input_file = './app.html'
output_file = './fig_2.html'

# Run the sorting function
# sort_table_by_difficulty(input_file, output_file)
add_class_to_skill_entries_with_zero_difficulty(input_file, output_file)
