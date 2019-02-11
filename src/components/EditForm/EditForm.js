import React from 'react';

const EditForm = props => (
    <div className="container py-4">
        <form onSubmit={props.submitted}>
            <div className="row">
                <div className="form-group mb-3 col-12 col-md-6">
                    <label>Page:</label>
                    <select className="form-control"
                            onChange={props.selected}
                    >
                        <option value="">Select page</option>
                        {props.pagesList.map((page, index) => (
                            <option key={index} value={page}>{page}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3 col-12">
                    <label>Title:</label>
                    <input type="text"
                           className="form-control"
                           name="title"
                           value={props.title}
                           onChange={props.changed}
                    />
                </div>
                <div className="form-group col-12">
                    <label>Content:</label>
                    <textarea className="form-control"
                              name="content"
                              value={props.content}
                              onChange={props.changed}
                    />
                </div>
                <div className="form-group text-right col-12">
                    <button type="submit" className="btn btn-info">Save</button>
                </div>
            </div>
        </form>
    </div>
);


export default EditForm;