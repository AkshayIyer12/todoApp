include node-core

board = {}

addTask board value1 value2 value3 = do
			       putLine 'Adding Task...'
	       	      	       defineProp board 'Task1' value1
			       defineProp board 'Task2' value2
			       defineProp board 'Task3' value3
			       return board

deleteTask board task = do
	     	   putLine 'Deleting Task...'
		   delete board[task]
		   return board

viewTask board task = do
	       	    putLine 'Opening Task...'
		    return board[task]


main = do
       val1 <- getLine 'Enter Task: '
       val2 <- getLine 'Enter Task: '
       val3 <- getLine 'Enter Task: '
       val4 <- addTask board val1 val2 val3
       putLine 'Task Board: ' board
       val5 <- getLine 'Delete Task: '
       val6 <- deleteTask val4 val5
       putLine 'Task Board: ' board
       val7 <- getLine 'Enter Task to view: '
       val8 <- viewTask val6 val7 
       putLine val8
       putLine 'Task Board: ' board

