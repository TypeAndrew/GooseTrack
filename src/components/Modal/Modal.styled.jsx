import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: scroll;    
  `
  
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;    
`
  
export const Inner = styled.div`  
	position: absolute;
		
	top:50%;
	left: 50%;
	transform: translate(-50%,-50%);    
			
	background-color: var(--primary-bgc-color);
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
	border-radius: 8px; 
	width: 30%;
	height: 50%; 
	text-align: center; 
	border: 1px solid var(--auth-placeholder-color); 
`