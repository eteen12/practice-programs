todo_list = []

while True: 
    print("\nTo-Do List")
    print("1. Add task")
    print("2. View tasks")
    print("3. Exit")

    choice = input("Choose an opton 1 2 or 3: ")

    if choice =='1':
        task = input("enter task:")
        todo_list.append(task)
        print(f"Task '{task}' added!")
    elif choice == '2':
        for index, task in enumerate(todo_list, 1):
            print(f"{index}, {task}")
    elif choice == '3':
        print("Exiting the program.")
        break
    else:
        print("Invalid option, please try again.")  