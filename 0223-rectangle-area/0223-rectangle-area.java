class Solution {
    public int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        // rectangle 1
        int area1=((ax2-ax1)*(ay2-ay1));

        // rectangle 2
        
        int area2=(bx2-bx1)*(by2-by1);

        // overlap rectangle

       
        int overlap_width=Math.min(ax2,bx2)-Math.max(ax1,bx1);
        int overlap_height=Math.min(ay2,by2)-Math.max(ay1,by1);
        int area3=0;

        if(overlap_width>0&&overlap_height>0) area3=overlap_width*overlap_height;

        // overlap triangle area
        int area=area1+area2-area3;
        return area;
    }
}