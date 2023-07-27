// Sample data for table rows (replace this with your actual data)
const tableData = [
    { id: 1, name: 'Esther Howard', status: 'Removed', account: 'Facebook', date: '2023-07-24', type: 'Comment' },
    { id: 2, name: 'Jane Smith', status: 'Blocked', account: 'Facebook', date: '2023-07-23', type: 'Like' },
    { id: 3, name: 'Sam Carol', status: 'Hidden', account: 'Twitter', date: '2023-07-23', type: 'Comment' },
    { id: 4, name: 'John Doe', status: 'Hidden', account: 'Instagram', date: '2023-06-15', type: 'Comment' },
  ];
  
  // Function to generate table rows and populate the table
  function generateTableRows() {
    const tableBody = document.getElementById('table-body');
  
    // Clear any existing rows to prevent duplication
    tableBody.innerHTML = '';
  
    // Loop through the data and create table rows
    tableData.forEach((item) => {
      const row = document.createElement('tr');
  
      // Create and populate cells for each column
      const selectCell = document.createElement('td');
      const selectCheckbox = document.createElement('input');
      selectCheckbox.type = 'checkbox';
      selectCell.appendChild(selectCheckbox);
      row.appendChild(selectCell);
  
      const nameCell = document.createElement('td');
      nameCell.textContent = item.name;
      row.appendChild(nameCell);
  
      const statusCell = document.createElement('td');
      statusCell.textContent = item.status;
      if (statusCell.textContent.trim().toLowerCase() === 'hidden') {
        const markElement = document.createElement('hidden');
        // Set the text content of the <mark> element
        markElement.textContent = statusCell.textContent;
  
        // Replace the original text element with the <mark> element
        statusCell.textContent = '';
        statusCell.appendChild(markElement);
      } else if (statusCell.textContent.trim().toLowerCase() === 'removed') {
        const markElement = document.createElement('removed');
        // Set the text content of the <mark> element
        markElement.textContent = statusCell.textContent;
  
        // Replace the original text element with the <mark> element
        statusCell.textContent = '';
        statusCell.appendChild(markElement);
      } else if (statusCell.textContent.trim().toLowerCase() === 'blocked') {
        const markElement = document.createElement('blocked');
        // Set the text content of the <mark> element
        markElement.textContent = statusCell.textContent;
  
        // Replace the original text element with the <mark> element
        statusCell.textContent = '';
        statusCell.appendChild(markElement);
      }
      row.appendChild(statusCell);

  
      const accountCell = document.createElement('td');
      accountCell.textContent = item.account;
      row.appendChild(accountCell);
  
      const dateCell = document.createElement('td');
      dateCell.textContent = item.date;
      row.appendChild(dateCell);
  
      const typeCell = document.createElement('td');
      typeCell.textContent = item.type;
      row.appendChild(typeCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to generate table rows when the page loads
  generateTableRows();
  