import { useEffect } from "react"
// utils func
import scrollToTop from "../utils/scrollToTop"

let curPageNum = 1
let pointA = 0
let pointB = 9

const CustomPagination = ({ dataFromDB, setDisplayedContent }) => {
    useEffect(() => {
        curPageNum = 1
        pointA = 0
        pointB = 9
    }, [])

    const paginationOption = (term) => {
        if (term === 'plus') {
            pointA += 9
            pointB += 9
            // setCurrentPageNumberCustom(curPageNum => curPageNum + 1)
            curPageNum += 1
        }

        if (term === 'minus') {
            pointA -= 9
            pointB -= 9
            // setCurrentPageNumberCustom(curPageNum => curPageNum - 1)
            curPageNum -= 1
        }

        if (pointB == 0) {
            setDisplayedContent(currData => ({
                ...currData,
                displayedDataList: currData.totalDataList.slice(0, 9)
            }))
            pointA = 0
            pointB = 9
            curPageNum = 1
            // setCurrentPageNumberCustom(1)
        } else if (pointB > dataFromDB.length && pointA >= dataFromDB.length) {
            setDisplayedContent(currData => ({
                ...currData,
                displayedDataList: currData.totalDataList.slice(0, 9)
            }))
            pointA = 0
            pointB = 9
            curPageNum = 1
            // setCurrentPageNumberCustom(1)
        } else if (pointB > dataFromDB.length) {
            const lastPostedListings = dataFromDB.length - pointA
            setDisplayedContent(currData => ({
                ...currData,
                displayedDataList: currData.totalDataList.slice(-lastPostedListings)
            }))
            curPageNum = Math.ceil(dataFromDB.length / 9)
            // setCurrentPageNumberCustom(Math.ceil(dataFromDB.length / 9))
        } else {
            setDisplayedContent(currData => ({
                ...currData,
                displayedDataList: currData.totalDataList.slice(pointA, pointB)
            }))
        }

        scrollToTop()
    }

    return (
        <div className="pagination pb-4 d-flex align-items-center justify-content-between">
            <div className="number-of-pages">
                <p className="mb-0 fw-bold text-muted">
                    Broj stranice:
                    <span className="mx-1 text-dark">
                        {/* {currentPageNumberCustom} */}
                        {curPageNum}
                    </span>
                    /
                    <span className="ms-1 text-dark">
                        {Math.ceil(dataFromDB.length / 9)}
                    </span>
                </p>
            </div>

            <div className="pagination-btn-container text-end">
                <button className="btn btn-primary px-3 me-3 btn-prev" onClick={() => paginationOption('minus')}>
                    Previous
                </button>
                <button className="btn btn-primary px-3 btn-next" onClick={() => paginationOption('plus')}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default CustomPagination