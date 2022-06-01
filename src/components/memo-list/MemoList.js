import {Memo} from "../memo/Memo";

export function MemoList({list, onEditSelect, onDeleteSelect, _Memo = Memo}) {

    function sortMemoList(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }

    const pendingList = list.filter(m => !m.finished)
    const finishedList = list.filter(m => m.finished)

    return <>
        <h1>Pending</h1>
        {
            pendingList.sort(sortMemoList)
            .map((memoData, idx) => <_Memo key={idx} memo={memoData} onEditSelect={onEditSelect} onDeleteSelect={onDeleteSelect}/>)
        }
        <h1>Finished</h1>
        {
            finishedList.sort(sortMemoList)
            .map((memoData, idx) => <_Memo key={idx} memo={memoData} onEditSelect={onEditSelect} onDeleteSelect={onDeleteSelect}/>)
        }
    </>
}