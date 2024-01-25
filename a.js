import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import androidx.appcompat.app.AppCompatActivity;

public class YourActivity extends AppCompatActivity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

 
        webView = findViewById(R.id.yourWebViewId);


        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);

       
        webView.loadUrl("https://imran.com");
    }
}
