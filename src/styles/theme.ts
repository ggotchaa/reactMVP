import { createTheme } from '@mui/material/styles';

const createShadow = (a: number, b: number, c: number, d: number) => `${a}px ${b}px ${c}px ${d}px #13131313`;

export const fincolors = {
  primary: { main: '#2C53F5', light: '#4668F6', dark: '#0825A0', contrastText: '#FFFFFF', disabled: '#D1D4DD' },
  secondary: { main: '#EFF2FE', light: '#E3E9FD', dark: '#CFD8FC', contrastText: '#95A9FA', disabled: '#ECEEF6' },
  text: { primary: '#111520', secondary: '#373C49', disabled: '#A7ADBE' },
  background: { default: '#F1F3F9', paper: '#FFFFFF' },
  error: { main: '#EC5654' },
  other: { footerColor: '#D4DBE1', borderColor: '#DFE2EC', tableBorderColor: '#BFC5D9' },
};

declare module '@mui/material/styles/createPalette' {
	interface PaletteOptions {
	  other?: {
		footerColor: string;
		borderColor: string;
		tableBorderColor: string;
	  };
	}
}

const customTheme = createTheme({
	palette: {
	  primary: fincolors.primary,
	  secondary: fincolors.secondary,
	  text: fincolors.text,
	  background: fincolors.background,
	  error: fincolors.error,
	  other: fincolors.other,
	},
  });

const theme = createTheme(customTheme,{
	palette: {
	  primary: fincolors.primary,
	  secondary: fincolors.secondary,
	  text: fincolors.text,
	  background: fincolors.background,
	  error: fincolors.error,
	  other: fincolors.other,
	},

	typography: {
		fontFamily: 'Roboto',

		h1: {fontSize: 32, fontWeight: 500, lineHeight: '40px'},

		h2: {fontSize: 24, fontWeight: 500, lineHeight: '28px'},

		h3: {fontSize: 18, fontWeight: 700, lineHeight: '26px'},

		h4: {fontSize: 16, fontWeight: 700, lineHeight: '24px'},

		h5: {fontSize: 14, fontWeight: 500, lineHeight: 'normal'},
		//h52: {fontSize: 14, fontWeight: 400, lineHeight: '18px'},

		//span: {fontSize: 16, fontWeight: 400, lineHeight: '20px', letterSpacing: 0},

		subtitle1: {},

		subtitle2: {},

		body1: {},

		body2: {},

		caption: {},

		overline: {},

		button: {
			lineHeight: '26px',
			fontWeight: 600,
		},
	},

	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				disableRipple: true,
				variant: 'contained',
			},

			variants: [
				{
					props: {variant: 'secondary'},
					style: {
						color: fincolors.primary.main,
						background: fincolors.secondary.main,
						'&:hover': {background: fincolors.secondary.light},
						'&:active': {background: fincolors.secondary.dark},
						'&:disabled': {color: fincolors.secondary.contrastText, background: fincolors.secondary.disabled},
					},
				},
				{
					props: {variant: 'icon'},
					style: {
						width: '44px',
						height: '44px',
						'&.MuiButton-sizeSmall': {minWidth: 0, minHeight: 0, width: '36px', height: '36px'},

						color: fincolors.primary.main,
						//backgroundColor: fincolors.primary.backgroundColor,
						background: fincolors.background.paper,
						border: '1px solid ' + fincolors.primary.main,
						'&:hover': {background: fincolors.secondary.light},
						'&:active': {background: fincolors.secondary.dark},
						'&:disabled': {color: fincolors.secondary.contrastText, background: fincolors.secondary.disabled, borderColor: fincolors.secondary.contrastText},
					},
				},
			],

			styleOverrides: {
				root: {
					minWidth: '40px',
					border: 0,
					textTransform: 'initial',
					// textTransform: 'unset',
					textAlign: 'center',
					fontSize: 16,
					fontFamily: 'Roboto',
					fontWeight: 600,
					borderRadius: 10,

					height: '44px',
				},

				sizeSmall: {
					height: '36px',
				},

				text: {
					width: 'auto',
					height: 'auto',
					padding: '0',
					margin: '0',
					fontSize: '14px',
					lineHeight: '16px',
					fontWeight: '600',
				},

				contained: {
					color: fincolors.primary.contrastText,
					background: fincolors.primary.main,
					'&:hover': {background: fincolors.primary.light},
					'&:active': {background: fincolors.primary.dark},
					'&:disabled': {background: fincolors.primary.disabled},
				},

				outlined: {
					color: fincolors.primary.main,
					background: fincolors.background.paper,
					border: '1px solid ' + fincolors.primary.main,
					'&:hover': {background: fincolors.secondary.light},
					'&:active': {background: fincolors.secondary.dark},
					'&:disabled': {color: fincolors.secondary.contrastText, background: fincolors.secondary.disabled, borderColor: fincolors.secondary.contrastText},
				},
			},
		},

		// Select menu
		MuiMenu: {
			styleOverrides: {
				root: {
					'> .MuiPaper-root.MuiMenu-paper': {
						marginTop: '4px',
						boxShadow: '0px 10px 40px 0px rgba(17, 21, 32, 0.12)',
						border: '1px solid ' + fincolors.other.borderColor,

						'> ul > li': {
							'&.Mui-selected, &:hover, &:active': {
								color: fincolors.primary.main,
								background: fincolors.secondary.main,
							},
						},
					},
				},
			},
		},

		// Table
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: '10px',
				},
			},
		},

		MuiTableRow: {
			styleOverrides: {
				root: {
					'&:last-child > .MuiTableCell-root': {border: 'none'},
					'&:hover': {backgroundColor: fincolors.secondary.main + '!important'},
				},
			},
		},

		MuiTableCell: {
			styleOverrides: {
				head: {
					fontSize: '12px',
					fontWeight: 500,
					lineHeight: '18px',
					padding: '16px 24px 16px 16px',

					border: 'none',
					color: fincolors.text.primary,
					backgroundColor: fincolors.background.default,
				},

				body: {
					fontSize: '14px',
					fontWeight: 400,
					lineHeight: '18px',
					padding: '10px 16px',

					borderColor: fincolors.other.tableBorderColor,
				},
			},
		},

		// Border color for cards
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: '10px',
					borderColor: fincolors.other.borderColor,
				},
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					fieldset: {borderColor: fincolors.other.borderColor},
					'&.Mui-disabled fieldset': {borderColor: fincolors.other.borderColor + '!important'},
				},
			},
		},

		// Inputs
		MuiTextField: {defaultProps: {fullWidth: true}},

		MuiInputLabel: {defaultProps: {shrink: true /*, disableAnimation: false */}},

		MuiFormControl: {
			styleOverrides: {
				root: {
					'& > label:has(~ .MuiInputBase-root)': {
						transform: 'none',
						position: 'inherit',

						fontWeight: 400,
						fontSize: '14px',
						lineHeight: '16px',

						margin: '0 0 6px 0',

						color: 'inherit',
						'&.Mui-focused': {color: 'inherit'},
					},
				},
			},
		},

		// .css-ezh0mw-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline
		// MuiOutlinedInput-notchedOutline css-1d3z3hw-MuiOutlinedInput-notchedOutline
		MuiInputBase: {
			styleOverrides: {
				root: {
					height: '44px',

					fontWeight: 500,
					fontSize: '16px',
					lineHeight: '20px',

					// default TextField
					'& > fieldset': {borderRadius: '10px', transition: '100ms'},
					'& > fieldset > legend > span': {display: 'none'},
					'&:hover fieldset': {borderColor: fincolors.primary.main + '!important'},
					'&.Mui-focused > fieldset': {borderWidth: '1px !important'},

					// disabled
					'&.Mui-disabled': {
						background: '#F4F6FA',
					},

					// padding fix, for Select & Autocomplete
					input: {padding: '0 14px !important'},
					'> .MuiSelect-select.MuiInputBase-input': {display: 'flex', alignItems: 'center', padding: '0 14px !important'},
					'&.MuiOutlinedInput-root': {
						paddingLeft: '0 !important',
						paddingBottom: '0 !important',
						paddingTop: '0 !important',
						'&:has(button)': {paddingRight: '0 !important'},
					},
				},

				sizeSmall: {
					height: '36px',
					fontSize: '16px',
					lineHeight: '20px',
				},
			},
		},

		MuiFormHelperText: {
			styleOverrides: {
				root: {
					margin: '6px 0 0 0',
					fontWeight: 400,
					fontSize: '12px',
					lineHeight: '14px',
				},
			},
		},

		MuiAppBar: {
			styleOverrides: {
				root: {
					background: fincolors.background.paper,
					color: fincolors.text.primary,
				},
			},
		},

		// List Items (SideMenu)
		MuiListItem: {
			styleOverrides: {
				root: {
					'> .MuiListItemButton-root': {
						borderRadius: '10px',

						'.MuiListItemText-root': {color: fincolors.text.secondary},
						'.MuiListItemIcon-root': {minWidth: '36px', '> svg': {fill: fincolors.text.secondary}},

						'&.Mui-selected': {
							backgroundColor: fincolors.background.paper,
							'&:hover': {backgroundColor: fincolors.background.paper},

							boxShadow: '0px 12px 16px 0px rgba(0, 0, 0, 0.05)',

							'> .MuiListItemIcon-root > svg': {fill: fincolors.primary.main},
						},
					},
				},
			},
		},

		// .css-p0fhkh-MuiButtonBase-root-MuiListItemButton-root.Mui-selected

		// Other
		MuiToolbar: {
			styleOverrides: {
				root: {
					height: 84,
					minHeight: 84,
				},
			},
		},

		MuiDialog: {
			defaultProps: {
				scroll: 'body',
			},
		},

		MuiDialogTitle: {
			styleOverrides: {
				root: {
					backgroundColor: fincolors.secondary.main,
					color: fincolors.primary.contrastText,
				},
			},
		},

		MuiDialogContent: {
			styleOverrides: {
				root: {
					padding: '24px !important',
				},
			},
		},

		MuiDialogActions: {
			styleOverrides: {
				root: {
					padding: '0 24px 24px',
				},
			},
		},

		MuiRating: {
			styleOverrides: {
				root: {
					color: fincolors.secondary.main,
				},
			},
		},

		MuiSwitch: {
			styleOverrides: {
				thumb: {
					backgroundColor: fincolors.primary.light,
				},
			},
		},

		MuiTab: {
			styleOverrides: {
				root: {
					color: fincolors.text.disabled,
					borderBottom: '1px solid ' + fincolors.text.disabled,
					minWidth: 0,
					maxWidth: 'auto',
					padding: '10px 16px',
					fontSize: '12px',
					fontWeight: 500,
					textTransform: 'uppercase',
					minHeight: '40px',
				},
			},
		},

		MuiTabs: {
			styleOverrides: {
				root: {
					minHeight: '30px',
					height: '40px',
				},

				indicator: {
					height: 2,
					display: 'flex',
					justifyContent: 'center',
					// backgroundColor: 'transparent',

					'& .MuiTabs-indicatorSpan': {
						maxWidth: 80,
						width: '100%',
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						backgroundColor: fincolors.primary.main,
					},
				},
			},
		},
	},

	breakpoints: {
		values: {xs: 0, sm: 920, md: 1280, lg: 1440, xl: 1920},
	},

	shape: {
		borderRadius: 8,
	},

	shadows: [
		'none',
		createShadow(1, 1, 1, 0),
		createShadow(2, 2, 2, 0),
		createShadow(3, 3, 3, 0),
		createShadow(4, 4, 4, 0),
		createShadow(5, 5, 5, 0),
		createShadow(6, 6, 6, 0),
		createShadow(7, 7, 7, 0),
		createShadow(8, 8, 8, 0),
		createShadow(9, 9, 9, 0),
		createShadow(10, 10, 10, 0),
		createShadow(11, 11, 11, 0),
		createShadow(12, 12, 12, 0),
		createShadow(13, 13, 13, 0),
		createShadow(14, 14, 14, 0),
		createShadow(15, 15, 15, 0),
		createShadow(16, 16, 16, 0),
		createShadow(17, 17, 17, 0),
		createShadow(18, 18, 18, 0),
		createShadow(19, 19, 19, 0),
		createShadow(20, 20, 20, 0),
		createShadow(21, 21, 21, 0),
		createShadow(22, 22, 22, 0),
		createShadow(23, 23, 23, 0),
		createShadow(24, 24, 24, 0),
	],
});

export default theme;
