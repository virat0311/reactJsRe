export function TodoItem1(){
    let name="Buy Milk"
    let date="4/10/2024"
    return (
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button " className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    );
}