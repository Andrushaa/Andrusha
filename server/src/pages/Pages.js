import React from 'react'
import {usePagination} from '../hook/usePagination';
import {Pagination} from '@material-ui/lab'
import './pages.css'

function Pages({data}) {

    const [totalPages, startPageIndex, endPageIndex, currentPage, dispPage] = usePagination(10, data.length);


    return (
        <div>

            {
               (()=>{
                
                const dispPosts = [];

                for(let i = startPageIndex; i <= endPageIndex; i++)
                   {
                       dispPosts.push(
                           <div className="comment">
                               <div key={data[i].id}>
                                   <div className="post-name"><span>{i+1}. </span> {data[i].name}</div>
                                   <div className="post-email">{data[i].email}</div>
                                   <div className="post-body">{data[i].body}</div>
                               </div>
                           </div>
                       )
                   }

               return dispPosts;

               })()

            }
            <div className="Pagination-wrapper">
                <Pagination count={totalPages}  color="primary" onChange={(event,value) => dispPage(value)} />
            </div>

        </div>
    )
}

export default Pages
