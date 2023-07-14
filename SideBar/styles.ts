import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(70px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
	height: 100%;
`;

export const Content = styled.div`
	height: 100%;
	display: flex;
`;

export const ClosedSideBar = styled.header`
	max-width: 108px;
	width: 100%;
	height: 60%;
	border-radius: 0 12px 12px 0;
    margin-bottom: 14rem;
	background: transparent;
    margin-left:12px;
	position: fixed;
	left: 0;
    bottom: 0;
	top: 1;
	z-index: 100;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;

	svg {
		color: rgb(248 250 252 );
	}

	ul li {
		cursor: pointer;
	}

	/* Links principais do app */
	nav {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;

		> button {
			width: 100%;
			padding-left: 18px;

			&:hover {
				svg {
					path {
						color: var(--third-color);
					}
				}
			}
		}

		> button svg {
			width: 36px;
			height: 36px;
            margin-top: 48px;
			color: #c4c4c4;
            margin-left: 22px;
		}

		> img {
			width: 36px;
			height: 36px;
			border-radius: 50%;
			margin-top: 16px;
		}

		ul {
			margin-top: 25px;
			width: 100%;
			text-align: center;
			display: flex;
			align-items: center;
			flex-direction: column;
            

			a {
				width: 100%;
				padding: 16px 0;
				border-radius: 8px 0 0 8px;

				display: flex;
				align-items: center;
				justify-content: center;

                transform: color 0.3s;

				&:hover {
					background: var(--primary-background);

					svg {
						path {
							color: var(--third-color);
						}
					}
				}
				svg {
					width: 22px;
					height: 22px;
                    margin-top: 6px;
                    margin-bottom: 6px;
                    color: rgb(248 250 252 );
				}
			}
		}
	}

	/* Icones que pode não ser tão principais no app */
	div {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;

		ul {
			margin-bottom: 16px;
			text-align: center;
			width: 100%;
			display: flex;
			align-items: center;
			flex-direction: column;

			a {
				padding: 16px 0;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;

				transition: color 0.3s;
				&:hover {
					svg path {
						color: var(--third-color);
					}
				}
				svg {
					width: 20px;
					height: 20px;
				}
			}
		}

		span {
			padding: 16px 0;
			text-align: center;
			border-radius: 8px 8px 0 0;
            
			display: flex;
			align-items: center;
			justify-content: center;

			background: var(--third-color);
			width: 100%;
			img {
				width: 32px;
				height: 32px;
				border-radius: 50%;
                
			}
		}
	}
`;

export const OpenSideBar = styled.header`
	
	width: 100%;
    max-width: 108px;
	position: fixed;
	left: 0;
    height: 60%;
	border-radius: 0 12px 12px 0;
    margin-bottom: 14rem;
    margin-left: 12px;
	background: transparent;
    bottom: 0;
	top: 1;
	z-index: 100;
	
   
	display: flex;
	align-items: center;

	svg {
		color: #f9f9f9;
	}

	section {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: space-between;

		max-width: 240px;
		height: 100%;

		background: var(--second-background);
		border-radius: 0 12px 12px 0;

		ul li {
			cursor: pointer;
		}

		/* Links principais do app */
		nav {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;

			width: 100%;

			> span {
				width: 100%;
				display: flex;
				align-items: flex-start;

				button {
					cursor: pointer;
					padding-left: 18px;

					&:hover {
						svg path {
							color: var(--third-color);
						}
					}

					svg {
						width: 36px;
			height: 36px;
            margin-top: 48px;
            color: rgb(248 250 252 );
            margin-left: 22px;
            
            
					}
				}
			}

			div {
				margin-top: 16px;

				display: flex;
				align-items: center;
				justify-content: flex-start;
				padding-left: 24px;
				flex-direction: row;
				gap: 16px;

				img {
					width: 36px;
					height: 36px;
					border-radius: 50%;
				}

				h1 {
					color: #fff;
					font-size: 14px;
                    
					animation: ${appearFromRight} 0.4s;
				}
			}

			ul {
				margin-top: 25px;
				width: 100%;
				text-align: left;
				display: flex;
				flex-direction: column;

				a {
					color: #c4c4c4;
					padding: 16px 20px;
					border-radius: 8px 0 0 8px;

					display: flex;
					align-items: center;
					gap: 16px;

					transition: all 0.3s;
					&:hover {
						background: var(--shadow-black-color);

						svg path {
							color: var(--third-color);
						}
					}

					p {
						animation: ${appearFromRight} 0.4s;
					}

					svg {
                        width: 22px;
					height: 22px;
                    margin-top: 6px;
                    margin-bottom: 6px;
					}
				}
			}
		}

		/* Icones que pode não ser tão principais no app */
		div {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;

			ul {
				margin-bottom: 16px;
				text-align: left;
				width: 100%;
				display: flex;
				flex-direction: column;

				a {
					padding: 16px 20px;
					display: flex;
					align-items: center;
					color: #c4c4c4;
					gap: 16px;

					transition: color 0.3s;
					&:hover {
						svg path {
							color: var(--third-color);
						}
					}
					svg {
						width: 20px;
						height: 20px;
                    
					}

					p {
						animation: ${appearFromRight} 0.4s;
					}
				}
			}

			span {
				padding: 16px 0;
				border-radius: 8px 8px 0 0;

				background: var(--third-color);
				width: 100%;

				display: flex;
				align-items: center;
				gap: 12px;

				p {
					text-overflow: ellipsis;
					color: #c4c4c4;
					width: 70%;
					padding-right: 12px;
					white-space: nowrap;
					animation: ${appearFromRight} 0.4s;
					overflow: hidden;
				}

				img {
					margin-left: 14px;
					width: 32px;
					height: 32px;
					border-radius: 50%;
				}
			}
		}
	}

	aside {
		width: 100%;
		height: 100%;
	}
`;
