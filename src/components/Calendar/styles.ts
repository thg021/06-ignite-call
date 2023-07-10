import { styled, Text } from '@thgsdev-ui/react'

export const CalendarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$6',
})

export const CalendarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CalendarTitle = styled(Text, {
  fontWeight: '$medium',
  textTransform: 'capitalize',

  span: {
    color: '$gray200',
  },
})

export const CalendarActions = styled('div', {
  display: 'flex',
  gap: '$2',
  color: '$gray200',

  button: {
    all: 'unset', // tira todos os styles default
    cursor: 'pointer',
    lineHeight: 0, // quando o botao tem somente um icon tem que realizar o reset do lineHeight porque o tamanho do botao é definido com o lineheight ou fontsize pelo texto
    borderRadius: '$sm',

    svg: {
      width: '$5',
      height: '$5',
    },

    '&:hover': {
      color: '$gray100',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $colors$gray100', // x y blur size -> $colors$gray100 para o stitches saber que isso é um token de color para o boxshadow pq esta propriedade nao é necessario uma prop de cor
    },
  },
})

export const CalendarBody = styled('table', {
  width: '100%',
  fontFamily: '$default',
  borderSpacing: '0.25rem',
  tableLayout: 'fixed', // calcula que todas colunas tem o mesmo tamanho

  'thead th': {
    color: '$gray200',
    fontWeight: '$medium',
    fontSize: '$sm',
  },

  // hack para colocar espaço entre tbody e thead
  'tbody:before': {
    lineHeight: '0.75rem',
    content: '.',
    display: 'block',
    color: '$gray800',
  },

  'tbody td': {
    boxSizing: 'border-box',
  },
})

export const CalendarDay = styled('button', {
  all: 'unset',
  width: '100%',
  aspectRatio: '1 / 1', // para ter a mesma largura e altura do mesmo tamanho
  background: '$gray600',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '$sm',

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
