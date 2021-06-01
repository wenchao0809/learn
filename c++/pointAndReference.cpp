#include <iostream>
#include <cstring>
using namespace std;


struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
};

void testStruct(Books);
void testStructPoint(Books*);
void testStructReference(Books&);

void testStruct(Books b) {
    strcpy(b.title, "fdf");
    cout << &b << endl;
}
void testStructPoint(Books* b) {
    Books book;
    book.book_id = 2;
    *b = book;
};

void testStructReference(Books& b) {
    Books book;
    book.book_id = 3;
    b = book;
}


int main()
{   Books book1;
    book1.book_id = 1;
    cout << &book1 << endl;
    strcpy(book1.title, "C++ 教程");
    testStruct(book1);
    cout << &book1 << endl;
    testStructPoint(&book1);
    cout << &book1 << endl;  
    cout << book1.book_id << endl;
    Books& b = book1;
    testStructReference(b);
    cout << &book1 << endl;
    cout << book1.book_id << endl;
}
