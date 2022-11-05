const todoList=require('../todo');
const {all,markAsComplete,add}=todoList();
describe("test suite for todolist",()=>{

    beforeAll(()=>{
        add({
            title:"test todo",
            completed:false,
            dueDate:new Date().toLocaleString("en-CA"),
        });
    });

    test("should add new todo",()=>{

        const toDoItemsCount=all.length;
        
        add({
            title:"Test todo",
            completed:false,
            dueDate:new Date().toLocaleDateString("en-CA"),
        });
        expect(all.length).toBe( toDoItemsCount +1);
    });

    test("should mark to do as completed",()=>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })

})