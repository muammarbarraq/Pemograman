import pygame
import random

pygame.init()

# create the screen
screen = pygame.display.set_mode((800, 600))

# Background
background = pygame.image.load('background.png')

# Title and Icon
pygame.display.set_caption("Physics")
icon = pygame.image.load('ufo.png')
pygame.display.set_icon(icon)

# Player
playerImg = pygame.image.load('player.png')
playerX = 370
playerY = 480
playerX_change = 0

# Enemy
enemyImg = pygame.image.load('enemy.png')
enemyX = random.randint(0,800)
enemyY = random.randint(50,150)
enemyX_change = 4
enemyY_change = 40


def player(x, y):
  screen.blit(playerImg,(x, y))

def enemy(x, y):
  screen.blit(enemyImg,(x, y))

# Game Loop
running = True
while running:
  
  # RED GREEN AND BLUE
  screen.fill((0, 0, 0))
  #background image
  screen.blit(background,(0, 0))

  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      running = False

    #if keystroke is presed check whther its right or left
    if event.type == pygame.KEYDOWN:
      if event.key == pygame.K_LEFT:
        playerX_change = -5
      if event.key == pygame.K_RIGHT:
        playerX_change = 5
    if event.type == pygame.KEYUP:
      if event.type == pygame.K_LEFT or event.key == pygame.K_RIGHT:
        playerX_change = 0

  # Checking for boundaries of spaceship
  playerX += playerX_change

  if playerX <=0:
    playerX = 0
  elif playerX >= 736:
    playerX =736

  # Enemy Movement
  enemyX += enemyX_change

  if enemyX <=0:
    enemyX_change = 4
    enemyY += enemyY_change
  elif enemyX >= 736:
    enemyX_change = -4
    enemyY += enemyY_change
  
  player(playerX,playerY)
  enemy(enemyX,enemyY)
  pygame.display.update()