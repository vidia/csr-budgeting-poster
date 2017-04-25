# Semi-Automatic Budgeting Tool Logging

For Purdue's CSR 342 class, one of the assignments is to track your budget for the semester using a site they created. However this site is not very usable, so I created this (hacky)script to let me export my budget from my own tool (YNAB) and import it into their website semi-automatically at the end of the semester. 

It works by taking in a formatted CSV file using the proper category headings and values (see: `sample.csv`) and repeatedly logging into the site to post each budget entry. 

# The Tool

At the time of posting, the tool is hosted for the class on a Heroku instance here: https://expense-report-sugato.herokuapp.com/

## The issues

While the project is really beneficial, the tool that was provided has a few major issues that make using it incredibly difficult. 

1. You cannot see a list of your transactions.
2. You cannot delete a mis-entered transaction.
3. (not fixed here) There are only a limited set of categories. 
4. (not fixed here) It cannot handle tracking income. 

This tool lets you import into the tool from a CSV file, avoiding some of the issues. 
