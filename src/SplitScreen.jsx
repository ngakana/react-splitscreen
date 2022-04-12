import React, { useState } from 'react'
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    padding: 1rem;
    display: flex;
    background-color: #44546a;
`

const Pane = styled.div`
    position: relative;
    flex: ${(props) => props.weight};
    background-color: #1a2637;
    border-radius: 0.4rem;
    padding: 60px 0.5rem 0;
`

const TaskBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: #1471f4;
    border-radius: 0.4rem 0.4rem 0 0;
`

export function SplitScreen({ children }) {

    const [left, right] = children;
    const [isDragging, setIsDragging] = useState(false);
    const [splitSize, setSplitSize] = useState({
        left: 100,
        right: 100
    });

    const handleDragging = (e) => {
        e.preventDefault();
        e.dataTransfer.effectAllowed = "move";
        setIsDragging(true);
        if (isDragging) {
            let parentWidth = e.target.parentElement.clientWidth;
            let offset = Math.round(100 * (e.clientX - 0) / (parentWidth));
            if (offset > 0) {
                setSplitSize(() => ({ left: offset, right: 100 - offset }));
            }
        }
    }

    return (
        <Container>
            <Pane weight={splitSize.left}>
                <TaskBar></TaskBar>
                {left}
            </Pane>
            <div
                draggable={true}
                style={{
                    width: "0.07rem",
                    padding: '0 2px',
                    border: '7px solid #44546a',
                    backgroundColor: "antiquewhite",
                    cursor: "col-resize"
                }}
                onDrag={(e) => handleDragging(e)}
                onDragEnd={() => setIsDragging(false)}

            ></div>
            <Pane weight={splitSize.right}>
                <TaskBar></TaskBar>
                {right}
            </Pane>
        </Container>
    )
}

