
export default function json2html(data) {
    let table = '<table data-user="balapeesala1022@gmail.com">';
    table += `
      <thead>
        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
      </thead>
      <tbody>`;
  
    data.forEach(item => {
      table += `<tr><td>${item.Name}</td><td>${item.Age}</td>`;
      
      if (item.Gender) {
        table += `<td>${item.Gender}</td>`;
      } else {
        table += `<td></td>`; 
      }
      table += `</tr>`;
    });
  
    table += `</tbody></table>`;
    return table;
  }
  
  const data = [
    { Name: "Alice", Age: 25 },
    { Name: "Bob", Age: 30 },
    { Name: "Charlie", Age: 35, Gender: "M" }
  ];
  
  console.log(json2html(data));
  