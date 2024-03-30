def write_to_file():
    try:
        # Open file in write mode ('w')
        with open("my_file.txt", "w") as file:
            # Write three lines of text to the file
            file.write("My name is Tonny Odhiambo\n")
            file.write("2nd line with numbers: 12345\n")
            file.write("3rd line with mixed content: apples and oranges\n")
    except (FileNotFoundError, PermissionError) as e:
        print(f"Error occurred while writing to file: {e}")
    else:
        print("File created and written successfully.")

def read_and_display():
    try:
        # Open file in read mode ('r')
        with open("my_file.txt", "r") as file:
            # Read and display contents of the file
            print("Contents of my_file.txt:")
            print(file.read())
    except (FileNotFoundError, PermissionError) as e:
        print(f"Error occurred while reading the file: {e}")

def append_to_file():
    try:
        # Open file in append mode ('a')
        with open("my_file.txt", "a") as file:
            # Append three additional lines of text to the file
            file.write("4th line appended\n")
            file.write("5th line appended with numbers: 67890\n")
            file.write("6th line appended with mixed content: grapes and bananas\n")
    except (FileNotFoundError, PermissionError) as e:
        print(f"Error occurred while appending to file: {e}")
    else:
        print("Text appended to file successfully.")

# Main function to execute the script
def main():
    write_to_file()
    read_and_display()
    append_to_file()
    read_and_display()

if __name__ == "__main__":
    main()
