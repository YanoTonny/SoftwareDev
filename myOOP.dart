import 'dart:io';

// Interface definition
abstract class Animal {
  void makeSound();
}

// Base class
class AnimalBase {
  void eat() {
    print('Animal is eating.');
  }
}

// Derived class implementing an interface and overriding a method
class Dog extends AnimalBase implements Animal {
  @override
  void makeSound() {
    print('Dog barks.');
  }
}

// Class with a method to read data from a file
class DataReader {
  List<String> readDataFromFile(String filePath) {
    File file = File(filePath);
    List<String> lines = file.readAsLinesSync();
    return lines;
  }
}

void main() {
  // Creating an instance of Dog
  Dog myDog = Dog();

  // Demonstrating method override
  myDog.eat(); // Output: Animal is eating.
  myDog.makeSound(); // Output: Dog barks.

  // Reading data from a file
  DataReader reader = DataReader();
  List<String> data = reader.readDataFromFile('data.txt');
  
  // Demonstrating the use of a loop
  for (String line in data) {
    print(line);
  }
}
