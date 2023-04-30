import styled from "styled-components";

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding-top: 16px;
padding-bottom: 16px;
gap: 8px;
isolation: isolate;

width: 100%;
height: 48px;

background: var(--active-item-sidebar-background);
border: 1px dashed var(--accent-text-color);
border-radius: 8px;
`;
 export const AddTask = styled.span`
 font-family: var(--primary-font);
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 1.29;

color: var(--primary-text-color);
 `;
 export const Plus = styled(AddTask)`
 margin-bottom: 4px;

font-weight: 300;
font-size: 32px;
 `;