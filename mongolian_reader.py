import cv2
import numpy as np
import pytesseract

def get_dilated_image(image_name):
    gray = cv2.imread(image_name, cv2.IMREAD_GRAYSCALE)
    inverted = cv2.bitwise_not(gray)
    kernel = np.ones((2, 2), np.uint8)
    dilated = cv2.dilate(inverted, kernel, iterations=1)
    gray = cv2.bitwise_not(dilated)
    return gray

gray = get_dilated_image('hand.jpeg')

_, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY+cv2.THRESH_OTSU)

blurred = cv2.medianBlur(gray, 3)

n_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(thresh)

min_size = 1500

previousX = 0

f = open("demofile2.txt", "a")

for i in range(2, n_labels):
    if stats[i, cv2.CC_STAT_AREA] >= min_size:
        y = stats[i, cv2.CC_STAT_TOP]
        x = stats[i, cv2.CC_STAT_LEFT]
        h = stats[i, cv2.CC_STAT_HEIGHT]
        w = stats[i, cv2.CC_STAT_WIDTH]
        roi = gray[y:y+h, x:x+w] 
        text = pytesseract.image_to_string(roi, lang='eng+mon', config ='tessedit_char_whitelist=.')
        text = text.strip()
        if (previousX > x):
            f.write("\n")
        f.write(text + ",")
        previousX = x

f.close()