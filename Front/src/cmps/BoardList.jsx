import { BoardPreview } from './BoardPreview.jsx';

export function BoardList({ boards }) {

  return (
    <div className="boards-container">
      {boards.map(board =>
        <BoardPreview board={board} key={board._id}  />
      )}
    </div>

  )
}