def fibonacci_sequence(n):
    sequence = [0, 1]
    if n <= 2:
        return sequence[:n]
    else:
        for i in range(2, n):
            next_term = sequence[-1] + sequence[-2]
            sequence.append(next_term)
        return sequence

def main():
    n = int(input("Enter the number of terms for the Fibonacci sequence: "))
    fibonacci_sequence_list = fibonacci_sequence(n)
    print("Fibonacci Sequence up to term", n, ":", fibonacci_sequence_list)

if __name__ == "__main__":
    main()
