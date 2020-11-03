import React, { Component } from "react";
import "./Grid.css"

function Grid_1x1(props) {
	
	const gridStyle = {
    	color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
    	backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
    	borderTopStyle: "solid",
    	borderTopWidth: "1.5px",
    	borderTopColor: props.t,
    	borderBottomStyle: 'solid',
    	borderBottomWidth: "1.5px",
    	borderBottomColor: props.b,
    	borderLeftStyle: 'solid',
    	borderLeftWidth: "1.5px",
    	borderLeftColor: props.l,
    	borderRightStyle: 'solid',
    	borderRightWidth: "1.5px",
    	borderRightColor: props.r,
	};

	return (
    	<div className="grid_1x1" id={`grid-${props.row_index}*${props.col_index}`} tabindex="1" style={gridStyle} onClick={() => props.handle_grid_1x1_click(props.row_index, props.col_index)}>
        	{ props.value === "0" ? "" : props.value}
    	</div>
	);
}

export default Grid_1x1;